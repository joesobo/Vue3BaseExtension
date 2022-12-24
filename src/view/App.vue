<template>
  <h1 class="bg-red-500">
    Hello world from Vue!
  </h1>
  <IconAccountBox style="font-size: 2em; color: red" />
  <p>{{ $t('hello') }}</p>
  <Button />
  <p>Current File: {{ currentFile }}</p>
  <button @click="openLastFile">
    Open Last File
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconAccountBox from '~icons/mdi/account-box'
import Button from './components/Button.vue'

let currentFile = ref('')
let lastFile = ref('')

// Example of handling messages sent from the extension to the webview
window.addEventListener('message', (event) => {
	const message = event.data // The JSON data our extension sent

	switch (message.command) {
	case 'setCurrentFileExample':
		lastFile.value = currentFile.value
		currentFile.value = message.text
		return
	}
})

// Example of sending a message from the webview to the extension
const openLastFile = () => {
	vscode.postMessage({
		command: 'openFileExample',
		text: lastFile.value
	})
}
</script>
