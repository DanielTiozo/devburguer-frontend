export function formateDate(date) {
	return new Date(date).toLocaleString('pt-BR', {
		year: 'numeric',
		month: 'short',
		day: '2-digit',
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});
}
