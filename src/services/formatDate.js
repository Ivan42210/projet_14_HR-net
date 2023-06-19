const formatDate = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const formDate = `${day}/${month.toString().padStart(2, '0')}/${year}`

    return formDate
}


export { formatDate }