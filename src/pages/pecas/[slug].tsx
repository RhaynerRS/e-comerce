import { GetStaticPaths, GetStaticProps } from 'next';

export default function Details(item){
    return(
        <a>{item.item.name.toString()}</a>
    )
}
export const getStaticPaths:GetStaticPaths= async () => {
    return {
        paths:[],
        fallback: 'blocking'
      }
    }
export const getStaticProps:GetStaticProps= async (ctx) => {
    const {slug}=ctx.params;
    const item={
        name:slug
    }
    return {
        props: {
          item,
        },
        revalidate: 60 * 60 * 24, // 24 hours
      }
}