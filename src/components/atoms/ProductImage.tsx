

type ProductImageProps = {
    src: string;  
    alt: string;
}
export const ProductImage = ({ src, alt }: ProductImageProps) => {
    return <div className="aspect-square ">
        <img src={src} alt={alt} width={300} height={300} className="h-full w-full object-cover object-center p-4"/>
    </div>
}