/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Lunette } from '../types/Lunette';
import { lunettesData as initialLunettesData } from '../data/lunettesData';

type DataContextType = {
  models: Lunette[];
  addModel: (model: Lunette) => void;
  updateModel: (id: number, updatedModel: Partial<Lunette>) => void;
  deleteModel: (id: number) => void;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [models, setModels] = useState<Lunette[]>(initialLunettesData);

  const addModel = (newModel: Lunette) => setModels(prev => [...prev, newModel]);
  const updateModel = (id: number, updatedModel: Partial<Lunette>) => {
    setModels(prev => prev.map(m => m.id === id ? { ...m, ...updatedModel } as Lunette : m));
  };
  const deleteModel = (id: number) => setModels(prev => prev.filter(m => m.id !== id));

  return (
    <DataContext.Provider value={{ models, addModel, updateModel, deleteModel }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used within DataProvider");
  return context;
};