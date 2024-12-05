#

## Refs vs State

- State:

  1.  Causes component to re-evaluation (re-execution) when changed.
  2.  Should be used for values that are directly reflected in the UI.
  3.  Should not be used for "behind the sences" values that hav no UI impact.

- Refs:
  1.  Do not cause component re-evaluatiion when changed.
  2.  Can be used to gain direct DOM element access (Great for reading values or accessing certain browser APIs).

# Refs use cases:

1. Using Refs for More Than "DOM Element Connections". For example : in this project refs were used to start and stop a challenge timer without affecting other challenges.

2. 


# Hooks Summary: 

1. **useRef:**
2. **useImperativeHandle:** 