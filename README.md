# NFT-image-grabber



## Getting Started 

a tool to grab nft metadata by passing ipfs cid of images


### Installing

```
npm install
```
to run the grabber\
the command take 3 args to run\
startindex as first arg\
endindex as second arg\
CID as third arg
 
```
npm run grab 
```

### Example

you need to pass startindex and endindex and Metadata CID as args\
Max img to Download is 1000 per command\
if you want to download 10000 images then you need to do it in 10 batch\
1 1000 CID then 1000 2000 CID then 2000 3000 CID and so on to 9000 9999 CID\
tool doesn't accept 10000 as endindex so you need to pass 9999\

startindex = 1 \
endindex = 1000 \
CID = Qmd5DbGu4q6hMziNBqwyHEYZmBUsG4mTTR2DPypTu6TGvH

```
npm run grab 1 1000 Qmd5DbGu4q6hMziNBqwyHEYZmBUsG4mTTR2DPypTu6TGvH
```
