type IProps = {
    title?: string,
    className?: string,
    children?: React.ReactNode
}

function AdminSection(props: IProps) {
    return <div className={`rounded-xl h-[500px] p-2 overflow-y-scroll overflow-x-auto bg-white drop-shadow-2xl dark:bg-sectionDarkBg ${props.className || ""}`}>
        <h1 className='text-[1.1rem]'>{props.title}</h1>
        {props.children}
    </div>;
}

export default AdminSection;