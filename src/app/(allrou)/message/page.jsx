"use client"
import Mmm from '@/app/components/sub/Mmm';
import SubGroup from '@/app/components/SubGroup';
import SubMessage from '@/app/components/SubMessage';
import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const MessagePage = () => {
    const [data, setdata] = useState();
    const [group, setGroup] = useState();
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => {
                setdata(data)
            })

        fetch("group.json")
            .then(res => res.json())
            .then(data => {
                setGroup(data)
            })
    }, [])
    console.log(group);
    return (
        <div className='px-8 py-14 bg-slate-100'>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-semibold mb-5'>Messege</h1>
                <button className='btn btn-primary'>+ New Chat</button>
            </div>
            <div className='bg-slate-50 px-3 py-5 grid md:grid-cols-5'>
                <div className=' col-span-3 lg:col-span-2'>
                    <h1 className='text-4xl  relative mr-0 '>
                        <BiSearch />
                    </h1>
                    <Tabs>
                        <TabList>
                            <Tab>
                                <button className='text-xl font-semibold bg-slate-500 px-4 py-2 rounded-xl'>Inbox</button>
                            </Tab>
                            <Tab>
                                <button className='text-xl font-semibold bg-slate-500 px-4 py-2 rounded-xl'>Group</button>
                            </Tab>

                        </TabList>

                        <TabPanel>

                            {
                                data?.map((m) =>

                                    <SubMessage key={m.id} main={m}></SubMessage>

                                )
                            }
                        </TabPanel>
                        <TabPanel>
                            {
                                group?.map(m=><SubGroup key={m.id} main={m}></SubGroup>)
                            }
                        </TabPanel>
                    </Tabs>

                </div>
                <div className='border border-l-slate-600 '>
                    <Mmm />
                </div>
            </div>
        </div>
    );
};

export default MessagePage;