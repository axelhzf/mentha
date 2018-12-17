import React from 'react';
import produce, { Draft } from 'immer';

type Updater<Value> = (draftState: Draft<Value>) => void | Value;

export function useImmer<Value>(
  initialValue: Value | (() => Value)
): [Value, (updater: Updater<Value>) => void] {
  const [val, updateValue] = React.useState<Value>(initialValue);
  return [
    val,
    (updater: Updater<Value>) => {
      updateValue(produce(updater));
    }
  ];
}
