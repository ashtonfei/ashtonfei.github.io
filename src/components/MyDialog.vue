<template>
	<v-dialog
		v-model="app.dialog.value"
		persistent
		:max-width="app.dialog.width || 440"
	>
		<v-card>
			<v-card-title
				class="text-h5"
				:class="
					app.dialog.color ? `bg-${app.dialog.color}` : 'bg-primary'
				"
			>
				{{ app.dialog.title || "Dialog" }}
			</v-card-title>
			<v-card-text class="mt-4">{{
				app.dialog.content || "Content"
			}}</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
					v-if="app.dialog.yes"
					color="success darken-1"
					prepend-icon="mdi-checkbox-marked-circle"
					text
					@click="app.dialog.yes"
				>
					Yes
				</v-btn>
				<v-btn
					v-if="app.dialog.no"
					color="error darken-1"
					prepend-icon="mdi-close-circle"
					text
					@click="app.dialog.no"
				>
					No
				</v-btn>
				<v-btn
					v-if="!app.dialog.yes || !app.dialog.no"
					:color="`${app.dialog.color || primary} darken-1`"
					text
					@click="app.closeDialog"
				>
					OK
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script setup>
import { useAppStore } from "../stores/app.js";
const app = useAppStore();
</script>
