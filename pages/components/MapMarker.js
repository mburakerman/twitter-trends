const MapMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="custom-marker">
            <img src="https://icons-for-free.com/iconfiles/png/512/map+marker+icon-1320166582858325800.png" onClick={onClick} />
        </div>
    )
}

export default MapMarker