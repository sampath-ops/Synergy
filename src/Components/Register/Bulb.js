import "./Bulb.css";
const Bulb = () => {
    return (
        <div className="bulb_container">
            <input type="checkbox" id="switch" checked="checked" readOnly/>
            <div className="room">
                <label htmlFor="switch" className="light-fixture" >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 508" className="bulb">
                    <g stroke="#000" fill="none" fillRule="evenodd">
                    <path d="M84 504c44.183 0 80-35.78 80-79.919 0-18.932-35.512-66.723-35.512-95.805C128.488 299.194 100.445 296 84 296c-16.783 0-45.268 1.922-45.268 33.531C38.732 361.14 4 405.614 4 424.081 4 468.219 39.817 504 84 504z" strokeWidth="8" className="glass"/>
                    <path d="M68.799 298L56.547 413.246l9.008-2.622 2.877 8.086 6.709-9.152 6.32 9.688 6.279-9.858 6.232 9.498 3.97-8.222 8.547 2.575L97.155 298H68.8z" strokeWidth="4" className="fillament"/>
                    <path d="M48 304h72v-28c0-15.464-12.536-28-28-28H76c-15.464 0-28 12.536-28 28v28z" fill="#000" className="socket"/>
                    <path d="M84.25 4v240" strokeWidth="8" strokeLinecap="square"/>
                    </g>
                </svg>
            </label>
            </div>
        </div>
      );
}
 
export default Bulb;