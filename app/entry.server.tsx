import { ServerRouter } from 'react-router';
import * as ReactDOMServer from 'react-dom/server';
import React from 'react';
import routes from './routes';

export default async function handleRequest(
  request: Request,
  status: number,
  headers: Headers,
  entryContext: any
) {
  const url = new URL(request.url);
  const element = React.createElement(ServerRouter, { context: entryContext, url });
  const html = ReactDOMServer.renderToString(element);
  const body = '<!DOCTYPE html>' + html;
  const responseHeaders = new Headers(headers);
  if (!responseHeaders.has('Content-Type')) {
    responseHeaders.set('Content-Type', 'text/html; charset=utf-8');
  }
  return new Response(body, { status, headers: responseHeaders });
}
