import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, Globe, MapPin, Building, Briefcase } from 'lucide-react';

function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching user:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div style={{ textAlign: 'center', marginTop: '4rem', fontSize: '1.2rem', color: 'var(--text-muted)' }}>Loading amazing profile...</div>;
  if (!user) return <div style={{ textAlign: 'center', marginTop: '4rem' }}>User not found</div>;

  return (
    <div>
      <Link to="/" className="back-btn">
        <ArrowLeft size={18} /> Back to Directory
      </Link>
      
      <div className="glass" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
          <div style={{
            width: '100px', height: '100px', borderRadius: '50%',
            background: 'linear-gradient(135deg, #a5b4fc, #6366f1)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '3rem', fontWeight: 'bold', color: 'white',
            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)'
          }}>
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{user.name}</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--primary)' }}>@{user.username}</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={20} color="var(--primary)" /> Contact Info
            </h3>
            <div style={{ color: 'var(--text-muted)' }}><strong>Email:</strong> {user.email}</div>
            <div style={{ color: 'var(--text-muted)' }}><strong>Phone:</strong> {user.phone}</div>
            <div style={{ color: 'var(--text-muted)' }}><strong>Website:</strong> {user.website}</div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={20} color="var(--primary)" /> Address
            </h3>
            <div style={{ color: 'var(--text-muted)' }}>
              {user.address.street}, {user.address.suite}<br />
              {user.address.city}, {user.address.zipcode}
            </div>
          </div>

          <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem', background: 'rgba(255, 255, 255, 0.5)', padding: '1.5rem', borderRadius: '12px' }}>
             <h3 style={{ fontSize: '1.2rem', color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Briefcase size={20} color="var(--primary)" /> Company: {user.company.name}
            </h3>
            <div style={{ fontStyle: 'italic', color: 'var(--text-muted)' }}>"{user.company.catchPhrase}"</div>
            <div style={{ color: 'var(--text-muted)' }}>{user.company.bs}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
