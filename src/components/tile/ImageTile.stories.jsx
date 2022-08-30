import ImageTile from "./ImageTile"

export default {
    component: ImageTile
}

export const PlaceHolder = () => <ImageTile width="w-1/6" square />
export const Broken = () => <ImageTile src="no" width="w-1/6" square />
export const Valid = () => <ImageTile src="https://media.cntraveler.com/photos/603fe43952a3e73ea42b22a4/16:9/w_2560%2Cc_limit/01-velo-slc-header-downtown-slc.jpg" width="w-1/6" square />