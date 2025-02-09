interface userIdPageProps {
    params: {
        userId: string;
        };
    };
    
    const Page = ({ params }: userIdPageProps) => {
        return (
           <div>
                userId: {params.userId}
           </div>
        );
    };
    export default Page;