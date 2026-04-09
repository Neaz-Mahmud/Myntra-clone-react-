import React from 'react';
import styles from './ProductSkeleton.module.css';

const ProductSkeleton = () => {
    // Creating an array of 8 items to match the number of products in your screenshot
    const skeletonCards = Array(8).fill(0);

    return (
        <div className={styles.gridContainer}>
            {skeletonCards.map((_, index) => (
                <div key={index} className={styles.card}>
                    {/* Image Placeholder */}
                    <div className={`${styles.skeleton} ${styles.image}`}></div>

                    {/* Text Placeholders */}
                    <div className={`${styles.skeleton} ${styles.text} ${styles.rating}`}></div>
                    <div className={`${styles.skeleton} ${styles.text} ${styles.brand}`}></div>
                    <div className={`${styles.skeleton} ${styles.text} ${styles.description}`}></div>
                    <div className={`${styles.skeleton} ${styles.text} ${styles.price}`}></div>

                    {/* Button Placeholder */}
                    <div className={`${styles.skeleton} ${styles.button}`}></div>
                </div>
            ))}
        </div>
    );
};

export default ProductSkeleton;