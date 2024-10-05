function numUniqueEmails(emails: string[]): number {
  const map = new Map();
  let result = 0;
  
  for (let i = 0; i < emails.length; i++) {
    const email = emails[i];
    const searchIndex = email.indexOf('@');
    if (searchIndex >= 0) {
      const domain = email.substring(searchIndex + 1, email.length);
      if (!map.has(domain)) {
        map.set(domain, []);
      }
      
      const local = email.substring(0, searchIndex);
      let cleanEmail = local.replaceAll('.', '');
      const searchPlusIndex = cleanEmail.indexOf('+');
      if (searchPlusIndex >= 0) {
        cleanEmail = cleanEmail.substring(0, searchPlusIndex);
      }
      
      const currentEmailsByDomain = map.get(domain);
      if (currentEmailsByDomain.includes(cleanEmail)) {
        continue;
      }
      
      currentEmailsByDomain.push(cleanEmail);
      map.set(domain, currentEmailsByDomain);
      result++;
    }
  }

  return result;
};