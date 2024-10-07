import { useNavigate } from 'react-router-dom';
import { useTimeout } from './hooks/timer-hooks';

// src/NotFound.tsx
export const NotFound = () => {
  const navigate = useNavigate();
  useTimeout(() => navigate('/'), 1000);
  return <div>페이지를 찾을 수 없습니다!</div>;
};
