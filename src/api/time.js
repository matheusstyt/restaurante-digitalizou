export function formatar_data(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}
export function parse_tempo(tempo) {
    const partesTempo = tempo.split(':');
    const horas = parseInt(partesTempo[0], 10);
    const minutos = parseInt(partesTempo[1], 10);

    return (horas * 60 + minutos) * 60 * 1000;
}

export function horario_formatado() {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
    return formattedDate;
}