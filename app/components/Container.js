import containerStyle from "@/app/styles/container.module.css"
export default function Container({ children }) {
    return (
        <div className={containerStyle.container}>
            {children}
        </div>
    )
}
