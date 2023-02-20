import React from 'react'

const Post = () => {
  return (
    <div>
        <div className="flex justify-left align-center w-full text-sm font-medium mt-2 ml-1">
                        <Signetprofile address={el.messageSender} />
                    </div>

                    <div className="pl-1 pt-1 pb-1 text-md font-medium ml-2 mt-1">
                        {el.tokendescription}
                    </div>

                    <div className="w-full grid items-center justify-center pt-2">
                        {/* <div>#{msg.messageId}</div> */}
                        {/* <div className="italic text-sm">Owned by {msg.messageSender}</div> */}
                        <div>
                            {el.tokenimageURL.length > 20 && (
                                <Image
                                    loader={() => el.tokenimageURL}
                                    src={el.tokenimageURL}
                                    height={390}
                                    width={390}
                                />
                            )}
                        </div>

                        <div className="w-full p-1 flex mt-2 mb-6">
                            <div className="justify-left align-center pl-1 absolute left-2">
                                <SignetLikeandStar
                                    SignetId={el.messageId}
                                    SignetIdOwner={el.messageSender}
                                />
                            </div>
                            <div className="italic text-sm absolute right-4">
                                {Datachange(parseInt(el.time))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-0.5 bg-slate-400 mt-3" />
    </div>
  )
}

export default Post