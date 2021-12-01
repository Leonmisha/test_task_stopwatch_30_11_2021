import React,{ useState, useEffect }  from 'react'
import { interval, fromEvent, merge, NEVER  } from 'rxjs';
import { switchMap, scan, tap, startWith, mapTo, throttle } from 'rxjs/operators';
import classNames from 'classnames'
import './App.css';

const getFormattedTime = (sec) => {
  const hh = ('0' + Math.floor(sec / 3600)).slice(-2)
  const remainderM = sec % 3600

  const mm = ('0' + Math.floor(remainderM / 60)).slice(-2)
  const remainderS = remainderM % 60

  const ss = ('0' + remainderS).slice(-2)

  return `${hh}:${mm}:${ss}`
}

const App = () => {
  const startBtn = React.useRef(null);
  const pauseBtn = React.useRef(null);
  const stopBtn = React.useRef(null);
  const resetBtn = React.useRef(null);

  const [counter, setCounter] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    // Refactoring. Need to think about events and refs. Maybe we could do it in another way?
    const start$ = fromEvent(startBtn.current, 'click').pipe(mapTo({ newIsCounting: true }))
    const stop$ = fromEvent(stopBtn.current, 'click').pipe(mapTo({ newIsCounting: false, newCounter: 0 }))
    const pause$ = fromEvent(pauseBtn.current, 'dblclick').pipe(
      throttle((_) => interval(300)),
      mapTo({ newIsCounting: false })
    )
    const reset$ = fromEvent(resetBtn.current, 'click').pipe(mapTo({ newIsCounting: true, newCounter: 0 }))

    const timer$ = merge(start$, stop$, pause$, reset$)
    .pipe(
      startWith({
        newIsCounting: false,
        newCounter: 0
      }),
      scan((state, curr) => ({ ...state, ...curr }), {}),
      tap((state) => { setCounter(state.newCounter); setIsCounting(state.newIsCounting) }),
      switchMap((state) =>  state.newIsCounting
        ? interval(1000).pipe(
          tap(
            (_) => { state.newCounter++; return 1 }
          ),
          tap((_) => setCounter(state.newCounter))
        )
        : NEVER
      )
    )
    timer$.subscribe()

    return () => {  }
  }, []);

  return (
    
    <div className="stopwatch">
      <span>{ getFormattedTime(counter) }</span>
      <div className="control-panel">
        <button className={ classNames('control-panel__button', isCounting && 'hidden') } ref={ startBtn }>Start</button>
        <button className={ classNames('control-panel__button', !isCounting && 'hidden') } ref={ stopBtn }>Stop</button>
        <button className="control-panel__button" ref={ pauseBtn }>Wait</button>
        <button className="control-panel__button" ref={ resetBtn }>Reset</button>
      </div>
    </div>
  );
}

export default App;
