/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Lunette } from '../types/Lunette';
import { lunettesData as initialLunettesData } from '../data/lunettesData';

type DataContextType = {
  models: Lunette[];
  addModel: (model: Lunette) => void;
  updateModel: (id: number, updatedModel: Partial<Lunette>) => void;
  deleteModel: (id: number) => void;
  resetToDefault: () => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [models, setModels] = useState<Lunette[]>(() => {
    const saved = localStorage.getItem('peterOptiqueModels');
    return saved ? JSON.parse(saved) : initialLunettesData;
  });

  // Sauvegarde automatique dans localStorage
  useEffect(() => {
    localStorage.setItem('peterOptiqueModels', JSON.stringify(models));
  }, [models]);

  const addModel = (newModel: Lunette) => {
    setModels(prev => [...prev, newModel]);
  };

  const updateModel = (id: number, updatedModel: Partial<Lunette>) => {
    setModels(prev => prev.map(m => m.id === id ? { ...m, ...updatedModel } as Lunette : m));
  };

  const deleteModel = (id: number) => {
    setModels(prev => prev.filter(m => m.id !== id));
  };

  const resetToDefault = () => {
    if (window.confirm("Réinitialiser toutes les données aux valeurs par défaut ?")) {
      setModels(initialLunettesData);
      localStorage.removeItem('peterOptiqueModels');
    }
  };

  return (
    <DataContext.Provider value={{ models, addModel, updateModel, deleteModel, resetToDefault }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataProvider");

  return context;
};