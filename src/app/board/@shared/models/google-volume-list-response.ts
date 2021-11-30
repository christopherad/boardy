export interface GoogleVolumeListResponse{
    totalItems: number;
    items: Array<{
        volumeInfo: {
            titre: string;
        }
    }>;
}