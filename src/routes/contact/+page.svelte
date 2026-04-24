<script lang="ts">
	import TitledPage from '$lib/components/common/titled-page/titled-page.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import CardTitle from '$lib/components/ui/card/card-title.svelte';
	import Icon from '$lib/components/ui/icon/icon.svelte';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';
	import ContactData from '$lib/data/contact';
	import { toast } from 'svelte-sonner';

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitting = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		submitting = true;
		try {
			const res = await fetch(ContactData.formEndpoint, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
				body: JSON.stringify({ name, email, message })
			});
			if (res.ok) {
				toast.success("Message sent! I'll get back to you soon.");
				name = '';
				email = '';
				message = '';
			} else {
				toast.error('Something went wrong. Please try again.');
			}
		} catch {
			toast.error('Network error. Please try again.');
		} finally {
			submitting = false;
		}
	}
</script>

<TitledPage title={ContactData.title}>
	<div class="mx-auto flex w-full max-w-lg flex-col gap-8 pb-16">
		<Card>
			<CardHeader>
				<CardTitle>Send a message</CardTitle>
			</CardHeader>
			<CardContent class="pt-4">
				<form onsubmit={handleSubmit} class="flex flex-col gap-4">
					<div class="flex flex-col gap-1.5">
						<Label for="name">Name</Label>
						<Input id="name" placeholder="Your name" required bind:value={name} />
					</div>
					<div class="flex flex-col gap-1.5">
						<Label for="email">Email</Label>
						<Input id="email" type="email" placeholder="your@email.com" required bind:value={email} />
					</div>
					<div class="flex flex-col gap-1.5">
						<Label for="message">Message</Label>
						<textarea
							id="message"
							placeholder="What's on your mind?"
							required
							rows="5"
							bind:value={message}
							class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full resize-none rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
						></textarea>
					</div>
					<Button type="submit" disabled={submitting} class="w-full">
						{submitting ? 'Sending…' : 'Send Message'}
					</Button>
				</form>
			</CardContent>
		</Card>

		<div class="flex items-center gap-3">
			<Separator class="flex-1" />
			<span class="text-muted-foreground text-sm">or reach me at</span>
			<Separator class="flex-1" />
		</div>

		<div class="flex justify-center gap-4">
			{#each ContactData.links as link}
				<a
					href={link.href}
					target={link.href.startsWith('mailto') ? undefined : '_blank'}
					rel="noopener noreferrer"
					aria-label={link.label}
				>
					<Button variant="outline" size="icon">
						<Icon icon={link.icon} />
					</Button>
				</a>
			{/each}
		</div>
	</div>
</TitledPage>
