# Setting up workspace

In this episode, Dan has a look at Unix, iTerm2, ohmyzsh and NodeJS. Below some resources can be found and additional notes about the video.

## Unix

More information about Unix: https://en.wikipedia.org/wiki/Unix

## iTerm2 & OhMyZSH

Daniel uses iTerm2 which is a customizable terminal emulator for Mac. Windows users unfortunately cannot do this. To customize the windows terminal however, you can have a look at tools like [starship.rs](https://starship.rs/) which allow for customizing the windows terminal. Do note that this is a bit more complicated to install than it is for Dan to install ohmyzsh due to the way Windows works.

Additionally, windows does not have Unix commands. Below however you can find the command equivalents in windows for the commands he executes:
| Unix command | Windows Command |
| ------------ | ---------------------- |
| ls | dir |
| cd | cd |
| pwd | cd (with no arguments) |

## NVM

Unfortunately, the nvm version shown in the video is only for unix based systems. There is however a maintained fork of nvm for Windows. You can find it here: https://github.com/coreybutler/nvm-windows

If this doesn't work for you, just install NodeJS directly through [NodeJS](https://nodejs.org/en)

## Visual Studio Code

The settings he used for his Visual Studio Code can be found below. These are the contents of his `settings.json` file.

```json
{
    "editor.tabSize": 2,
    "editor.renderWhitespace": "all",
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true,
    "javascript.preferences.quoteStyle": "single",
    "prettier.singleQuote": true,
    "workbench.editorAssociations": {
        "*.ipynb": "jupyter.notebook.ipynb"
    },
    "editor.fontSize": 24,
    "editor.wordWrapColumn": 120,
    "prettier.printWidth": 120,
    "diffEditor.hideUnchangedRegions.enabled": true
}
```
