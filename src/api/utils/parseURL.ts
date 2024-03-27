interface ParsedUrl {
  path: string;
  params?: Record<string, string>;
}

export function parseURL(url: string): ParsedUrl {
  const parsed: ParsedUrl = { path: '' };

  const queryParamsIndex = url.indexOf('?');
  if (queryParamsIndex !== -1) {
      parsed.params = {};
      const queryString = url.slice(queryParamsIndex + 1);
      const queryParams = new URLSearchParams(queryString);
      queryParams.forEach((value, key) => {
          parsed.params![key] = value;
      });

      parsed.path = url.slice(0, queryParamsIndex);
  } else {
      parsed.path = url;
  }

  return parsed;
}

const DEFAULT_ID_QUERY = '{id}';

export function areUrlsIdentical(url1: string, url2: string): boolean {
  const idPlaceholder = DEFAULT_ID_QUERY;
  const url1WithoutIds = url1.replace(/\d+/g, idPlaceholder);
  const url2WithoutIds = url2.replace(/\d+/g, idPlaceholder);

  return url1WithoutIds === url2WithoutIds;
}

export function extractIdFromUrl(url: string, idPattern: string): Number | undefined {
  const idMatch = url.match(new RegExp(idPattern.replace(DEFAULT_ID_QUERY, '(\\d+)')));
  return idMatch ? parseInt(idMatch[1]) : undefined;
}