import * as vscode from "vscode";

export class BaseViewProvider implements vscode.WebviewViewProvider {
	public static readonly viewType = "vue3BaseExtension";

	private _view?: vscode.WebviewView;

	constructor(private readonly _extensionUri: vscode.Uri) {}

	public resolveWebviewView(
		webviewView: vscode.WebviewView,
		context: vscode.WebviewViewResolveContext,
		_token: vscode.CancellationToken
	) {
		this._view = webviewView;

		webviewView.webview.options = {
			// Allow scripts in the webview
			enableScripts: true,
			localResourceRoots: [this._extensionUri],
		};

		webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
	}

	private _getHtmlForWebview(webview: vscode.Webview) {
		// Get the local path to main script run in the webview, then convert it to a uri we can use in the webview.
		// const scriptUri = webview.asWebviewUri(
		// 	vscode.Uri.joinPath(this._extensionUri, "media", "main.js")
		// );

		const styleResetUri = webview.asWebviewUri(
			vscode.Uri.joinPath(this._extensionUri, "assets/css", "reset.css")
		);
		const styleVSCodeUri = webview.asWebviewUri(
			vscode.Uri.joinPath(this._extensionUri, "assets/css", "vscode.css")
		);

		return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<link href="${styleResetUri}" rel="stylesheet">
				<link href="${styleVSCodeUri}" rel="stylesheet">
			</head>
			<body>
				<h1>Hello World from Base View Extension!</h1>
			</body>
			</html>`
	}
}


// <script nonce="${nonce}" src="${scriptUri}"></script>
