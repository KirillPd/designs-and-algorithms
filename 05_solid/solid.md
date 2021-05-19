| Principle                         | Examples  |
|-----------------------------------|---|
| Single Responsibility Principle   | Class [characterClassifier](https://github.com/microsoft/vscode/blob/main/src/vs/editor/common/core/characterClassifier.ts#L64) has only one responsibility |
| Open / Closed Principle           | Class [MirrorModel](https://github.com/microsoft/vscode/blob/main/src/vs/editor/common/services/editorSimpleWorker.ts#L93) extends [mirrorTextModel](https://github.com/microsoft/vscode/blob/main/src/vs/editor/common/model/mirrorTextModel.ts#L32) imported as `BaseMirrorModel`. Devs extended `BaseMirrorModel` behavior without changing the actual class |
| Liskov Substitution Principle     | [Run](https://github.com/microsoft/vscode/blob/main/src/vs/editor/contrib/contextmenu/contextmenu.ts#L280) method of the `ShowContextMenu` class extends [run](https://github.com/microsoft/vscode/blob/026e6239be90c9602ce1213f2538c0e0685196cb/src/vs/editor/browser/editorExtensions.ts#L349) method of the base `EditorAction` class and uses exactly the same interface for arguments. Actually, the base class also allow to pass arguments as a third argument, but `ShowContextMenu`s implementation doesn't contain `args` argument. Sort of LSP *violation*. The right implementation can be found here [MultiEditorAction](https://github.com/microsoft/vscode/blob/026e6239be90c9602ce1213f2538c0e0685196cb/src/vs/editor/browser/editorExtensions.ts#L376) |
| Interface Segregation Principle   | Interfaces [IChange](https://github.com/microsoft/vscode/blob/main/src/vs/editor/common/editorCommon.ts#L127) and [ICharChange](https://github.com/microsoft/vscode/blob/main/src/vs/editor/common/editorCommon.ts#L136) are declared separately and combined |
| Dependency Inversion Principle    | I didn't find a case of a good example of DIP, but [here](https://github.com/typeorm/typeorm/blob/master/src/connection/Connection.ts#L147) is an example of DIP violation. `Connection` high-level class has two methods that are tightly coupled with low-level data bases types |