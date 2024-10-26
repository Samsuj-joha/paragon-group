export default function Blogs(){
    const blog = [
        {
            id:1,
            title:"blog post 1",
            description:"Blog post description one"
        },
        {
            id:2,
            title:"blog post 2",
            description:"Blog post description two"

        }
    ]
    return (
        <div>
            {
                blog.map(item=>(
                    <p key={item.id}>{item.title}</p>
                ))
            }

        </div>
    );
}