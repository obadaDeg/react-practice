# 


## Refs vs State

- State:
   1. Causes component to re-evaluation (re-execution) when changed.
   2. Should be used for values that are directly reflected in the UI.
   3. Should not be used for "behind the sences" values that hav no UI impact.

- Refs:
   1. Do not cause component re-evaluatiion when changed.
   2. Can be used to gain direct DOM element access (Great for reading values or accessing certain browser APIs).

