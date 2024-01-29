import styles from './Button.module.css' 
//For  Modules css file should be created in name button.module.css 
// and that file is imported in this file in anme of styles
function Button(){
    return(
        // here from imported styles we import specific class styles 
        <button className={styles.btn}>Click</button>
    );

}
export default Button