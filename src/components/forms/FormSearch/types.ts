export type Props = {
    onSearch: (params: FormField) => void
}

export type FormField = {
    query?: string
}