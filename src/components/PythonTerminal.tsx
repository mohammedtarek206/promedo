import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sounds } from '../utils/sounds';

interface HistoryItem {
  type: 'input' | 'output' | 'error';
  content: string;
}

export function PythonTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    { type: 'output', content: 'Python 3.11.0 (Pyodide) initialized.' },
    { type: 'output', content: 'Type your code below and press Enter.' },
  ]);
  const [pyodide, setPyodide] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      sounds.playSuccess();
      if (!pyodide) initPython();
    }
  }, [isOpen]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, isOpen]);

  const initPython = async () => {
    setIsLoading(true);
    try {
      const instance = await (window as any).loadPyodide();
      setPyodide(instance);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setHistory(prev => [...prev, { type: 'error', content: 'Failed to load Python.' }]);
    }
  };

  const handleExecute = async (code: string) => {
    if (!code.trim()) return;
    setHistory(prev => [...prev, { type: 'input', content: code }]);
    sounds.playClick();
    setInput('');

    if (!pyodide) {
      setHistory(prev => [...prev, { type: 'error', content: 'Python is still loading...' }]);
      return;
    }

    try {
      pyodide.setStdout({
        write: (buffer: any) => {
          const text = new TextDecoder().decode(buffer);
          setHistory(prev => [...prev, { type: 'output', content: text.trim() }]);
          return buffer.length;
        }
      });

      const result = await pyodide.runPythonAsync(code);
      if (result !== undefined) {
        setHistory(prev => [...prev, { type: 'output', content: String(result) }]);
      }
    } catch (err: any) {
      setHistory(prev => [...prev, { type: 'error', content: err.message }]);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-20 sm:bottom-6 sm:right-24 z-[60] flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-slate-900 border border-blue-500/50 text-blue-400 shadow-2xl shadow-blue-500/20 transition-transform hover:scale-110 active:scale-95"
        title="Python Console"
      >
        <span className="font-mono text-[10px] sm:text-xs font-bold">PY</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-x-4 bottom-20 top-20 z-[60] sm:inset-auto sm:bottom-24 sm:right-6 sm:h-[400px] sm:w-[500px] flex flex-col overflow-hidden rounded-xl border border-blue-500/20 bg-slate-950/95 shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex items-center justify-between border-b border-blue-500/20 bg-blue-500/5 px-4 py-2">
              <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest font-bold">Python 3.11 Interpreter</span>
              <button onClick={() => setIsOpen(false)} className="h-8 w-8 flex items-center justify-center text-slate-500 hover:text-white transition-colors">✕</button>
            </div>

            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 font-mono text-xs scrollbar-hide"
              onClick={() => inputRef.current?.focus()}
            >
              {history.map((item, i) => (
                <div key={i} className="mb-1">
                  {item.type === 'input' && (
                    <div className="flex gap-2">
                      <span className="text-blue-400">{">>>"}</span>
                      <span className="text-white break-all">{item.content}</span>
                    </div>
                  )}
                  {item.type === 'output' && (
                    <div className="whitespace-pre-wrap text-slate-300">{item.content}</div>
                  )}
                  {item.type === 'error' && (
                    <div className="text-red-400">{item.content}</div>
                  )}
                </div>
              ))}
              
              {isLoading ? (
                <div className="flex items-center gap-2 text-blue-400/50 animate-pulse">
                  <div className="h-2 w-2 rounded-full bg-blue-400" />
                  <span>Kernel Loading...</span>
                </div>
              ) : (
                <div className="flex gap-2">
                  <span className="text-blue-400 shrink-0">{">>>"}</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleExecute(input)}
                    className="flex-1 bg-transparent text-white outline-none"
                    autoFocus
                  />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
