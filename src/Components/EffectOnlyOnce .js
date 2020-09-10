import { useEffect } from 'react';
const useEffectOnlyOnce = (func) => useEffect(func, [])
export default useEffectOnlyOnce;