# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Storing appointment bookings in Google Sheets

This project can send submitted appointment data to a Google Sheet via a small web endpoint (recommended: Google Apps Script Web App).

1. Create a new Google Sheet and note its ID (from the URL).
2. In Google Drive create a new Apps Script project and paste this code into `Code.gs`:

```javascript
function doPost(e) {
	try {
		// use the sheet ID from your spreadsheet URL (provided)
		const ss = SpreadsheetApp.openById('12wBIQKvpNYiAIAVClHb4a9xzH1u07LEm9Pup_SgmSco');
		const sheet = ss.getSheetByName('Sheet1') || ss.getSheets()[0];
		const data = JSON.parse(e.postData.contents);

		const row = [
			new Date(),
			data.childName || '',
			data.age || '',
			data.parentName || '',
			data.parentPhone1 || '',
			data.parentPhone2 || '',
			data.whatsappNumber || '',
			data.email || '',
			(data.services || []).join('|'),
			data.message || '',
			data.appointmentDate || '',
			data.appointmentSlot || ''
		];

		sheet.appendRow(row);

		return ContentService.createTextOutput(JSON.stringify({ success: true }))
			.setMimeType(ContentService.MimeType.JSON);
	} catch (err) {
		return ContentService.createTextOutput(JSON.stringify({ success: false, error: err.message }))
			.setMimeType(ContentService.MimeType.JSON);
	}
}
```

3. Deploy the script as a Web App (New deployment → Web app). Set "Who has access" to "Anyone" (or "Anyone with the link"). Copy the Web App URL.
4. In your project create a `.env.local` file at the project root and add:

```
VITE_SHEETS_ENDPOINT=https://script.google.com/macros/s/............../exec
```

5. Restart the dev server. On form submit the frontend will POST JSON to the Apps Script endpoint and the script will append a row to the sheet.

Notes:
- Protect the sheet by restricting access or adding simple validation to the Apps Script if needed.
- For production use consider adding server-side validation, authentication, and spam protection.
