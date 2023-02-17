export type Props = {
    onSearch: (params: FormField) => void
}

type FormField = {
    query?: string
}

export const defaultValue: FormField = {
    query: ""
}