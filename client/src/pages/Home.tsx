import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getPosts } from "../redux/post/getPost/getPost.action";
import { RootState } from "../redux/store";
import { useEffect } from "react"
import styles from "../styles/Home.module.css";
import Post from "../components/post/Post";
import { CarDetailsProps } from "../constant/constant";


const Home = () => {
    const { allPosts } = useSelector((store: RootState) => store.getPosts);
    const dispatch: Dispatch<any> = useDispatch();

    console.log(allPosts)

    useEffect(() => {
        dispatch(getPosts());
    }, [])

    return (
        <div className={styles.container}>
            {allPosts.length !== 0 &&
                allPosts?.map((post: CarDetailsProps) => <Post key={post._id} {...post} />)
            }
        </div>
    )
}

export default Home