/* eslint-disable @typescript-eslint/no-unsafe-argument */

function useUploadImage() {

    const upload = async (files: any): Promise<string> => {
        const urls: string[]=[]
        const CLOUD_NAME = "dpwto5xyv"
        const PRESET_NAME = "shopDV-upload"
        const FOLDER_NAME = "learnECMAS"
        const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
        const formUpload = new FormData()

        formUpload.append("upload_preset", PRESET_NAME)
        formUpload.append("folder", FOLDER_NAME)

        for(const file of files) {
            formUpload.append("file", file)

            await fetch(api, {
                method: "POST",
                body: formUpload
            })
            .then(res => res.json())
            .then((res) => urls.push(res.secure_url))
        }
        return urls[0]
    }

    return upload;
}

export default useUploadImage;