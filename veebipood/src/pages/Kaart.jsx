import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'
function Kaart() {
  return (
    <div>
        <MapContainer className="map" center={[59.426, 24.735]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[59.426, 24.735]}>
                <Popup>
                Kristiine Keskus. <br /> Avatud 9-22.
                </Popup>
            </Marker>

            <Marker position={[59.436, 24.754]}>
                <Popup>
                Viru Keskus. <br /> Avatud 9-22.
                </Popup>
            </Marker>

            <Marker position={[59.422, 24.792]}>
                <Popup>
                Ülemiste Keskus. <br /> Avatud 9-22.
                </Popup>
            </Marker>
        </MapContainer>
    </div>
  )
}

export default Kaart