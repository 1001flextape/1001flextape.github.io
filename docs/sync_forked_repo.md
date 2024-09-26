
# Syncing Forked Repo with Original Repository

When you fork your own GitHub repository (or create a duplicate), you may want to keep it up-to-date with the original repo's changes. Here's how you can do that by adding the original repo as a remote and pulling updates.

## Steps to Sync Your Forked Repo

### 1. Add the Original Repo as an Upstream Remote

Navigate to your new repo's local directory:

```bash
cd YOUR-NEW-REPO
```

Then, add the original repository as a new remote called `upstream`:

```bash
git remote add upstream https://github.com/ORIGINAL-USERNAME/ORIGINAL-REPO-NAME.git
```

### 2. Fetch Updates from the Upstream

To get the latest changes from the original repo, run:

```bash
git fetch upstream
```

### 3. Merge or Rebase Changes

After fetching the updates, you can merge or rebase them into your own repo. For example, to merge changes into your `main` branch:

```bash
git checkout main
git merge upstream/main
```

Alternatively, if you prefer to rebase:

```bash
git rebase upstream/main
```

### 4. Push the Updates to Your Fork

Once you've merged or rebased the changes, push them to your forked repo on GitHub:

```bash
git push origin main
```

## Summary of Commands

1. Add the original repository as upstream:
   ```bash
   git remote add upstream https://github.com/ORIGINAL-USERNAME/ORIGINAL-REPO-NAME.git
   ```

2. Fetch updates from upstream:
   ```bash
   git fetch upstream
   ```

3. Merge or rebase changes from upstream:
   ```bash
   git merge upstream/main
   # or
   git rebase upstream/main
   ```

4. Push the updated changes to your fork:
   ```bash
   git push origin main
   ```

Now, you're able to keep your forked repository up-to-date with changes from the original repository!

