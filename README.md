# Project: ZealthyTest - ToDo App

## About the Repository

This repository contains the **ZealthyTest** project, including the ToDo app inside the `todo/` folder.

The ToDo app supports full **CRUD functionality**:

- **Create** – Add new todo items
- **Read** – View your todo list
- **Update** – Edit the text of existing todos
- **Delete** – Remove items from the list

Each todo item includes:

- A unique `id` generated using `Date.now()`
- A `text` field entered by the user
- A `completed` boolean value (default: `false`)
---

## Important Note: Submodule Issue and Resolution

## ⏰ Timeline Note

The working ToDo application — including full CRUD functionality — was completed and pushed to the `ZealthyTest` repository by **1:30 PM EST** on the day of the interview. The complete code was present inside the `todo/` folder at that time.

You can verify this by checking the **commit history** in the repository.  
The only change made afterward was the **correction of the submodule issue**, which ensured the `todo/` folder displayed properly on GitHub.

This cleanup did **not affect the original functionality** or structure of the application.

### What Happened?

Initially, the `todo/` folder was accidentally added as a **Git submodule** because it contained its own `.git` directory when first committed. As a result:

- On GitHub, the `todo/` folder appeared with a right-arrow icon, linking to a separate repository instead of showing its full contents.
- This caused confusion and prevented the proper display of the ToDo app files inside the main repository.

---

### How the Issue Was Fixed

To resolve this, the following steps were performed:

1. **Remove the submodule from Git tracking without deleting local files:**

   ```bash
   git rm --cached todo
   rm -rf todo
   git add .
   git commit -m "Working todoList"
   git push
