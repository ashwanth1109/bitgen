import React from 'react';

export type DummyProps = {
  /**
   * whether button to increment or decrement should be shown
   */
  shouldIncrement: boolean;
};

export function Dummy({ shouldIncrement }: DummyProps) {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>Count: {count}</h1>
      {shouldIncrement ? (
        <button onClick={handleIncrement} role="button">
          Increase
        </button>
      ) : (
        <button onClick={handleDecrement} role="button">
          Decrease
        </button>
      )}
    </>
  );
}
