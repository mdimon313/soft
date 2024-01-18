import loading from '@/app/styles/loading.module.css';
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className={loading.loader_div}>
            <span className={loading.loader}></span>
        </div>
    );
}