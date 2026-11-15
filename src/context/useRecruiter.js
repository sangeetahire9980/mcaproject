import { useContext } from 'react';
import { RecruiterContext } from './recruiterContextDef';

export function useRecruiter() {
  const ctx = useContext(RecruiterContext);
  if (!ctx) throw new Error('useRecruiter must be used inside RecruiterProvider');
  return ctx;
}
