<template>
	<h1 class="bg-red-500">Hello world from Vue!</h1>
	<IconAccountBox style="font-size: 2em; color: red" />
	<p>{{ $t('hello') }}</p>
</template>

<script setup lang="ts">
import IconAccountBox from '~icons/mdi/account-box'
</script>
