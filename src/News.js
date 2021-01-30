import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './news.css';

const News = () => {
	let params = useParams();
	const [datas, setDatas] = useState([]);
	const API = 'C6FFBf5DDNApcPwYuKwbWqfppX4AZVxY';

	useEffect(() => {
		let query = params['query'];
		console.log(query);
		let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API}`;
		fetch(url)
			.then((res) => {
				// console.log(res);
				return res.json();
			})
			.then((result) => {
				console.log(result.response.docs);
				var res = result.response.docs;
				let ans = [];
				for (let r of res) {
					let imgUrl = '';
					if (r.multimedia.length > 0) {
						imgUrl += 'https://www.nytimes.com/';
						imgUrl += r.multimedia[0]?.url;
					}
					ans.push({
						title: r.headline.main,
						datetime: r.pub_date,
						description: r.abstract,
						image: imgUrl,
					});
				}
				setDatas(ans);
			})
			.catch((err) => console.log(err));
	}, [params]);

	return (
		<div style={{ width: '90%', margin: 'auto' }}>
			{datas.map((data) => {
				return (
					<div className='news_article'>
						<div>
							<h4>{data.title}</h4>
							<span>{data.datetime}</span>
							<p>{data.description}</p>
						</div>
						<img
							src={data.image}
							style={{ height: '250px' }}
							alt={data.title}
						></img>
					</div>
				);
			})}
		</div>
	);
};

export default News;
