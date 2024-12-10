# Forms

## What's So Difficult About Forms?

1. **Form Submission:**

- Handling Submission is relatively **easy**.
- Entered values can be managed via **state**.
- Alternatively, they can be extracted via **Refs**.
- Or via **FormData** and native browser features.

2. **Input Validation:**

- Providing a good user experience is **tricky**.
- You can **validate** on every **keystroke** -> errors may be shown **too early.**
- you can **validate** on **lost focus** -> errors may be shown **too long**.
- You can **validate** on form **subbmision** -> errors may be shown **too late**.
