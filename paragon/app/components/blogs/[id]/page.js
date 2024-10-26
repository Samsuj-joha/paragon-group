export default function BlogPage({params}){
    const {id} =  params
   
    return (
        <div>
            <p>the requested page is {id}</p>

        </div>
    );
}