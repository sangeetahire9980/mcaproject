import { useContext } from 'react';
import { CandidateContext } from './candidateContextDef';

export function useCandidate() {
  const context = useContext(CandidateContext);
  if (!context) {
    throw new Error('useCandidate must be used within a CandidateProvider');
  }
  return context;
}
